import { Storage } from "aws-amplify";

export const fetchMultipleImages = async (items) => {
  try {
    const response = await Promise.all(
      items.map(async (item) => {
        const { coverKey } = item;
        const coverUrl = await Storage.get(coverKey);
        item.coverUrl = coverUrl;
        return item;
      })
    );
    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const fetchMultipleAvatars = async (items) => {
  try {
    console.log("Fetching images from S3 / HELPER FUNCTION");
    const response = await Promise.all(
      items.map(async (item) => {
        const { avatarKey } = item;
        if (!avatarKey) {
          item.avatarUrl = null;
          return item;
        }
        const avatarUrl = await Storage.get(avatarKey);
        item.avatarUrl = avatarUrl;
        return item;
      })
    );
    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const generateImageKey = async (image) => {
  try {
    const imageURI = await fetch(image);
    const blob = await imageURI.blob();
    try {
      const { key } = await Storage.put(blob.data.name, blob, {
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

export const fetchAvatar = async (key) => {
  try {
    const avatarUrl = await Storage.get(key);
    return avatarUrl;
  } catch (error) {
    console.warn(error);
  }
};
