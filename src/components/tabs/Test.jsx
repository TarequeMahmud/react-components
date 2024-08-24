import Tabs from "./Tabs";

const Component = () => {
  return <h1>This is Tab 3</h1>;
};

export default function TestTab() {
  const tabs = [
    {
      label: "Tab-1",
      content: <div>This is Tab-1</div>,
    },
    {
      label: "Tab-2",
      content: <p>This is Tab-2</p>,
    },
    {
      label: "Tab-3",
      content: <Component />,
    },
  ];
  return <Tabs tabsContent={tabs} />;
}
