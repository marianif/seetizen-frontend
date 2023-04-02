// import { EditorState, convertFromRaw, convertToRaw, RichUtils } from "draft-js";
// import { useState, useEffect } from "react";
// import { draftToMarkdown } from "markdown-draft-js";
// import { TextEditor, Layout, ToolBar } from "@/src/components";
// import { withSSRContext, API, graphqlOperation, Auth } from "aws-amplify";
// import { BiImageAdd } from "react-icons/bi";
// import { generateImageKey } from "@/src/helpers/storage";
// import { getUser } from "@/src/graphql/queries";
// import { createArticle } from "@/src/graphql/mutations";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { LoadingButton } from "@mui/lab";
// import styles from "@/styles/pages/CreateArticle.module.css";
// import { colors } from "@/src/utils/colors";

// const CreateArticle = (props) => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const { hasPermission, isUsingAs, currentGroup } = useSelector(
//     (state) => state.user
//   );
//   const [values, setValues] = useState({
//     title: "",
//     image: "",
//     file: "",
//   });
//   const [editorState, setEditorState] = useState(
//     EditorState.createWithContent(convertFromRaw(initialData))
//   );

//   const onPublish = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const hasEmptyFields = Object.values(values).some((value) => value === "");
//     if (hasEmptyFields) {
//       alert("Compila tutti i campi");
//       setLoading(false);
//       return;
//     }

//     try {
//       const { attributes } = await Auth.currentAuthenticatedUser();
//       const coverKey = await generateImageKey(values.file);
//       const rawContent = convertToRaw(editorState.getCurrentContent());
//       const {
//         data: { getUser: user },
//       } = await API.graphql(graphqlOperation(getUser, { id: attributes.sub }));
//       const content = draftToMarkdown(rawContent);

//       const input = {
//         writerId: isUsingAs === "user" ? attributes.sub : currentGroup.id,
//         title: values.title,
//         content,
//         coverKey,
//         publishedAt: new Date().toISOString(),
//         latitude: user.latitude,
//         longitude: user.longitude,
//         viewersIDS: "[]",
//         viewsCount: 0,
//       };

//       if (isUsingAs === "group") {
//         Object.defineProperty(input, "groupArticlesId", {
//           value: currentGroup.id,
//         });
//       }

//       await API.graphql(graphqlOperation(createArticle, { input }));
//       router.back();
//     } catch (error) {
//       console.warn(error);
//       setLoading(false);
//     }
//   };

//   const toggleToolbar = ({ label, style }) => {
//     if (label !== "heading") {
//       console.log(`LABEL: ${label}`);
//       onChange(RichUtils.toggleInlineStyle(editorState, style));
//       return;
//     }
//     onChange(RichUtils.toggleBlockType(editorState, style));
//   };

//   const onChange = (editorState) => {
//     setEditorState(editorState);
//   };

//   const handleFile = async (e) => {
//     if (e.target.files.length !== 0) {
//       const [file] = e.target.files;
//       const src = URL.createObjectURL(file);
//       setValues({
//         ...values,
//         file,
//         image: src,
//       });
//     }
//   };

//   useEffect(() => {
//     !hasPermission && router.push("/dashboard");

//     return;
//   }, [hasPermission]);

//   return (
//     <Layout headerType="app" title="Dashboard | Seetizen" hiddenFooter>
//       <div className={styles.wrapper}>
//         <main>
//           <input
//             placeholder="Titolo"
//             value={values.title}
//             onChange={(e) => setValues({ ...values, title: e.target.value })}
//             minLength={5}
//             maxLength={98}
//             required
//             className={styles.titleInput}
//             type="text"
//           />
//           <div className={styles.container}>
//             <ToolBar editorState={editorState} onToggle={toggleToolbar} />
//             <TextEditor
//               state={{ editorState, setEditorState }}
//               onChange={onChange}
//             />
//           </div>
//         </main>
//         <div className={styles.innerRight}>
//           <LoadingButton
//             onClick={onPublish}
//             loading={loading}
//             sx={{
//               backgroundColor: colors.emerald400,
//               color: colors.white,
//               cursor: "pointer",
//               marginBottom: 2,
//               "&:hover": {
//                 backgroundColor: colors.gray100,
//                 border: 1,
//                 borderColor: colors.darkGray,
//                 color: colors.darkGray,
//               },
//             }}
//           >
//             Pubblica
//           </LoadingButton>
//           <div className={styles.imageUpload}>
//             <label htmlFor="imageUpload">
//               <BiImageAdd size={28} color={"black"} />
//               <input
//                 type="file"
//                 name="image"
//                 accept=".png, .jpeg, .jpg"
//                 onChange={handleFile}
//               />
//             </label>
//             {values.image && <img src={values.image} className={styles.img} />}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export async function getServerSideProps({ req, res }) {
//   const { Auth } = withSSRContext({ req });

//   try {
//     await Auth.currentAuthenticatedUser();
//     return {
//       props: {
//         authenticated: true,
//       },
//     };
//   } catch (error) {
//     res.writeHead(401, { "Content-Type": "text/plain" });
//     // Send the response body
//     res.end("[error: 401 - invalid credentials]");
//   }
// }

// export default CreateArticle;

// const initialData = {
//   blocks: [
//     {
//       key: "16d0k",
//       text: "",
//       type: "unstyled",
//       depth: 0,
//       inlineStyleRanges: [{ offset: 0, length: 23, style: "BOLD" }],
//       entityRanges: [],
//       data: {},
//     },
//   ],
//   entityMap: {},
// };
