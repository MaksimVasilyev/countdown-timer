import type { Meta, StoryObj } from "@storybook/react";

import StoryCheck from "@/components/StoryBookCheck/StoryCheck";

const meta = {
  title: "Example/Check",
  component: StoryCheck,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof StoryCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Check: Story = {
  args: {},
};
