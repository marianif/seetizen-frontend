// import { useRouter } from "next/router";
// import styles from "@/styles/pages/Login.module.css";
// import { useState, useEffect } from "react";
// import { Layout } from "../src/components";
// import { Auth } from "aws-amplify";
// import { Spinner } from "../src/components";
// import { LoadingButton } from "@mui/lab";
// import { colors } from "@/utils/colors";
// import { BASE_URL } from "constants";

// const LoginPage = (props) => {
//   console.log(BASE_URL);
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [showError, setShowError] = useState(false);
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     // Accessing the user session on the client
//     Auth.currentAuthenticatedUser()
//       .then(() => {
//         router.push("/dashboard");
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     try {
//       e.preventDefault();
//       const hasEmptyFields = Object.values(values).some(
//         (value) => value === ""
//       );

//       if (hasEmptyFields) {
//         setShowError(true);
//         alert("Compila tutti i campi del form");
//         return;
//       }
//       const { attributes } = await Auth.signIn({
//         username: values.email,
//         password: values.password,
//       });

//       if (attributes) {
//         router.push("/dashboard");
//       }
//     } catch (error) {
//       console.warn(error);
//     }
//   };

//   return (
//     <Layout headerType={"landing"}>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className={styles.container}>
//           <h3>Accedi alla tua dashboard</h3>
//           <p>
//             Accedi per pubblicare eventi e articoli direttamente dalla tua
//             dashboard
//           </p>
//           <div className={styles.formContainer}>
//             <form>
//               <span>
//                 <input
//                   onChange={onChange}
//                   placeholder="Email"
//                   value={values.email}
//                   name="email"
//                   type="text"
//                   required
//                   inputMode="email"
//                 />
//                 <input
//                   onChange={onChange}
//                   placeholder="Password"
//                   value={values.password}
//                   name="password"
//                   type="password"
//                   required
//                   minLength={8}
//                   autoComplete="current-password"
//                 />
//               </span>
//               <LoadingButton
//                 laoding={loading}
//                 onClick={handleSubmit}
//                 sx={{
//                   backgroundColor: colors.emerald400,
//                   color: colors.white,
//                 }}
//               >
//                 Accedi
//               </LoadingButton>
//             </form>
//           </div>
//           <div className={styles.innerBottom}>
//             <p>
//               Non hai un account?{" "}
//               <a href="" target={"_blank"} rel="noreferrer">
//                 Scarica l&apos; app
//               </a>
//               , registrati e usa le tue credenziali per accedere alla dashboard
//             </p>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default LoginPage;
