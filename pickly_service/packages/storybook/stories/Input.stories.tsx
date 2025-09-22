import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@pickly/ui-web';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pickly 입력 필드 컴포넌트입니다. 한국어 입력에 최적화되어 있으며 다양한 스타일과 상태를 지원합니다.

## 사용법

\`\`\`jsx
import { Input } from '@pickly/ui-web';

<Input
  label="이름"
  placeholder="이름을 입력하세요"
  onChange={(value) => console.log(value)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'flushed'],
      description: '입력 필드의 시각적 스타일을 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '입력 필드의 크기를 설정합니다.',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: '입력 필드의 상태를 설정합니다.',
    },
    isDisabled: {
      control: 'boolean',
      description: '입력 필드를 비활성화합니다.',
    },
    isRequired: {
      control: 'boolean',
      description: '필수 입력 필드로 표시합니다.',
    },
    isReadOnly: {
      control: 'boolean',
      description: '읽기 전용으로 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
    onChange: (value) => console.log('입력값:', value),
  },
};

export const WithHelperText: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    helpText: '유효한 이메일 주소를 입력해주세요.',
    type: 'email',
    onChange: (value) => console.log('이메일:', value),
  },
  parameters: {
    docs: {
      description: {
        story: '도움말 텍스트가 포함된 입력 필드입니다.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    label: '필수 항목',
    placeholder: '반드시 입력해야 합니다',
    isRequired: true,
    onChange: (value) => console.log('필수값:', value),
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 필드입니다. 레이블 옆에 * 표시가 나타납니다.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    state: 'error',
    errorMessage: '비밀번호는 8자 이상이어야 합니다.',
    onChange: (value) => console.log('비밀번호:', value),
  },
  parameters: {
    docs: {
      description: {
        story: '오류 상태의 입력 필드입니다. 오류 메시지가 표시됩니다.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    label: '사용자 이름',
    placeholder: '사용자 이름을 입력하세요',
    state: 'success',
    helpText: '사용 가능한 사용자 이름입니다.',
    onChange: (value) => console.log('사용자 이름:', value),
  },
  parameters: {
    docs: {
      description: {
        story: '성공 상태의 입력 필드입니다. 초록색 테두리가 표시됩니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 필드',
    placeholder: '입력할 수 없습니다',
    isDisabled: true,
    value: '비활성화된 값',
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 입력 필드입니다.',
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    label: '읽기 전용 필드',
    value: '변경할 수 없는 값',
    isReadOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: '읽기 전용 입력 필드입니다.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Input
        label="기본 (Default)"
        placeholder="기본 스타일"
        variant="default"
      />
      <Input
        label="채워진 (Filled)"
        placeholder="채워진 스타일"
        variant="filled"
      />
      <Input
        label="밑줄 (Flushed)"
        placeholder="밑줄 스타일"
        variant="flushed"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 입력 필드 스타일을 보여줍니다.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        label="작은 크기"
        placeholder="작은 입력 필드"
        size="sm"
      />
      <Input
        label="보통 크기"
        placeholder="보통 입력 필드"
        size="md"
      />
      <Input
        label="큰 크기"
        placeholder="큰 입력 필드"
        size="lg"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 입력 필드를 보여줍니다.',
      },
    },
  },
};

export const KoreanInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '400px' }}>
      <Input
        label="한국어 텍스트"
        placeholder="한글을 입력해보세요"
        helpText="한국어 입력에 최적화되어 있습니다."
      />
      <Input
        label="주소 입력"
        placeholder="서울특별시 강남구 테헤란로 123"
        helpText="상세 주소까지 입력해주세요."
      />
      <Input
        label="회사명"
        placeholder="(주) 픽클리 코리아"
        helpText="정확한 회사명을 입력해주세요."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '한국어 입력 최적화를 확인하는 예제입니다.',
      },
    },
  },
};