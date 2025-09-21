# Pickly Operations Directory

This directory contains all operational tools and configurations for the Pickly service development and deployment.

## 📁 Directory Structure

```
ops/
├── claude-flow/              # Claude Flow execution environment
│   ├── claude-flow          # Main executable (Unix/macOS)
│   ├── claude-flow.bat      # Windows batch file
│   ├── claude-flow.ps1      # PowerShell script
│   ├── claude-flow.config.json # Default configuration
│   ├── .claude/             # Claude Code agent definitions
│   ├── .mcp.json           # MCP server configurations
│   ├── coordination/        # Swarm coordination modules
│   └── memory/             # Persistent memory storage
├── configs/                 # Configuration files
│   ├── claude-flow.config.json # Pickly-specific Claude Flow config
│   ├── mcp.github.json     # GitHub MCP integration
│   ├── mcp.filesystem.json # Filesystem MCP integration
│   └── [other mcp configs] # Additional MCP configurations
├── logs/                   # Execution logs
│   └── claude-flow.log     # Claude Flow activity logs
└── secrets/                # Environment variables and secrets
    └── .env.example        # Template for environment variables
```

## 🚀 Usage

### Starting Claude Flow from ops directory

```bash
# From the ops directory
cd claude-flow
./claude-flow

# Using the Pickly-specific configuration
cd ../
./claude-flow/claude-flow --config ./configs/claude-flow.config.json
```

### Working with Pickly Service

The Claude Flow configuration is set to work with the `../pickly-service` directory as the working directory. All operations will be performed relative to the pickly-service monorepo.

### Environment Setup

1. Copy the environment template:
```bash
cp secrets/.env.example secrets/.env.development
```

2. Fill in your actual values in the environment files

3. Source the environment before running Claude Flow:
```bash
source secrets/.env.development
```

## 🛠️ Configuration

### Claude Flow Configuration

The main configuration file `configs/claude-flow.config.json` contains:
- Working directory pointing to `../pickly-service`
- SPARC methodology enabled
- Mesh topology for agent coordination
- Logging to `./logs/claude-flow.log`

### MCP Integrations

- **GitHub**: Repository management and automation
- **Filesystem**: File system operations
- **Additional**: Can be added as needed for specific integrations

## 📊 Monitoring

- Logs are stored in `logs/` directory
- Memory and session data in `claude-flow/memory/`
- Agent coordination state in `claude-flow/coordination/`

## 🔐 Security

- All secrets should be stored in `secrets/` directory
- Environment files should NOT be committed to git
- Use `.env.example` as a template for required variables

## 📝 Notes

- This directory is separate from the main `pickly-service` codebase
- Claude Flow operates on the service directory but stores its state here
- Keep this directory in sync with Claude Flow updates
- Memory and coordination data persists across sessions