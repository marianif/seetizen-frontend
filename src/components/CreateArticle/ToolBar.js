import { ToolbarButton } from "..";
import styles from "@/styles/components/Toolbar.module.css";
import { FaBold, FaItalic, FaUnderline, FaHeading } from "react-icons/fa";

const SIZE = 16;

const STYLES = [
  { label: "heading", style: "header-two" },
  { label: "bold", style: "BOLD" },
  { label: "italic", style: "ITALIC" },
  { label: "underline", style: "UNDERLINE" },
];

const ToolBar = ({ editorState, onToggle }) => {
  const currentInlineStyle = editorState.getCurrentInlineStyle();

  return (
    <div className={styles.container}>
      {STYLES.map((item) => {
        const { label, style } = item;
        let icon;

        label === "bold"
          ? (icon = <FaBold size={SIZE} />)
          : label === "italic"
          ? (icon = <FaItalic size={SIZE} />)
          : label === "underline"
          ? (icon = <FaUnderline size={SIZE} />)
          : label === "heading" && (icon = <FaHeading />);

        return (
          <ToolbarButton
            key={label}
            label={label}
            active={currentInlineStyle.has(style)}
            icon={icon}
            onToggle={onToggle}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default ToolBar;
