export const toStyleDictionary = (designtokens) => {
  const tokens = Object.fromEntries(designtokens);

  const transformedJson = {};

  for (const item in tokens) {
    const tokenInfo = tokens[item];

    const keyWithoutPrefix = item.replace('--', '');
    const keyParts = keyWithoutPrefix.split('-');
    const mainKey =
      keyParts.length > 1 ? keyParts.slice(0, -1).join('-') : keyParts[0];
    const index = keyParts.length > 1 ? keyParts[keyParts.length - 1] : 0;

    const { $value, $type, ...meta } = tokenInfo;
    const value = $value;
    const type = $type;

    if (!transformedJson[mainKey]) {
      transformedJson[mainKey] = {};
    }

    transformedJson[mainKey][index] = { value, type, ...meta };
  }

  return transformedJson;
};
