import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@pickly/ui-web';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pickly 버튼 컴포넌트입니다. 한국어 최적화된 텍스트 렌더링과 접근성을 지원합니다.

## 사용법

\`\`\`jsx
import { Button } from '@pickly/ui-web';

<Button variant="primary" onPress={() => console.log('클릭!')}>
  버튼 텍스트
</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: '버튼의 시각적 스타일을 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼의 크기를 설정합니다.',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼을 비활성화합니다.',
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태를 표시합니다.',
    },
    children: {
      control: 'text',
      description: '버튼 내부에 표시될 텍스트나 요소입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '기본 버튼',
    onPress: () => console.log('Primary 버튼 클릭'),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '보조 버튼',
    onPress: () => console.log('Secondary 버튼 클릭'),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '외곽선 버튼',
    onPress: () => console.log('Outline 버튼 클릭'),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '고스트 버튼',
    onPress: () => console.log('Ghost 버튼 클릭'),
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '삭제 버튼',
    onPress: () => console.log('Destructive 버튼 클릭'),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="xs" onPress={() => {}}>
        아주 작음
      </Button>
      <Button size="sm" onPress={() => {}}>
        작음
      </Button>
      <Button size="md" onPress={() => {}}>
        보통
      </Button>
      <Button size="lg" onPress={() => {}}>
        큼
      </Button>
      <Button size="xl" onPress={() => {}}>
        아주 큼
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 버튼을 보여줍니다.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: '로딩 중...',
    isLoading: true,
    onPress: () => console.log('Loading 버튼 클릭'),
  },
  parameters: {
    docs: {
      description: {
        story: '로딩 상태의 버튼입니다. 스피너가 표시되고 클릭이 비활성화됩니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: '비활성화된 버튼',
    isDisabled: true,
    onPress: () => console.log('이 메시지는 출력되지 않습니다'),
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 버튼입니다. 클릭할 수 없고 시각적으로 구분됩니다.',
      },
    },
  },
};

export const KoreanText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <Button variant="primary" onPress={() => {}}>
        가나다라마바사아자차카타파하
      </Button>
      <Button variant="secondary" onPress={() => {}}>
        회원가입 및 이용약관 동의
      </Button>
      <Button variant="outline" onPress={() => {}}>
        장바구니에 담기
      </Button>
      <Button variant="ghost" onPress={() => {}}>
        자세히 보기
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '한국어 텍스트가 올바르게 렌더링되는지 확인하는 예제입니다.',
      },
    },
  },
};