import styles from "@/styles/components/MarkdownBar.module.css";
import { FaBold, FaHeading, FaItalic } from "react-icons/fa";

const SIZE = 18;

const markdowns = ["heading", "bold", "italic"];

const MarkdownBar = ({ handleTextMarkdown }) => {
  return (
    <div className={styles.container}>
      {markdowns.map((markdown, index) => {
        let icon;

        markdown === "heading"
          ? (icon = <FaHeading size={SIZE} />)
          : markdown === "bold"
          ? (icon = <FaBold size={SIZE} />)
          : (icon = markdown === "italic" && <FaItalic size={SIZE} />);

        return (
          <button key={index} onClick={(e) => handleTextMarkdown(e, markdown)}>
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default MarkdownBar;
