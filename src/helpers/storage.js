import { Storage } from "aws-amplify";

export const generateImageKey = async (file) => {
  try {
    try {
      const { key } = await Storage.put(file.name, file, {
        contentType: "image/jpeg",
      });

      return key;
    } catch (error) {
      console.warn(error);
      return;
    }
  } catch (error) {
    console.warn(error);
  }
};
