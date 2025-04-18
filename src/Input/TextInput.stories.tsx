import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { Search } from "lucide-react"; // optional icon example

const meta: Meta<typeof TextInput> = {
  title: "Data Entry/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    icon: <Search size={16} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <TextInput label="Small" size="sm" placeholder="Small size" />
      <TextInput label="Medium" size="md" placeholder="Medium size" />
      <TextInput label="Large" size="lg" placeholder="Large size" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextInput
        label="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
      />
    );
  },
};
