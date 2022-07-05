export const REGEX_CNJ_UM = {
  regex: /^(\d{7})/,
  replace: '$1-',
};

export const REGEX_CNJ_DOIS = {
  regex: new RegExp(/^(\d{7})(\d{2})/),
  replace: '$1-$2.',
};

export const REGEX_CNJ_TRES = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})/),
  replace: '$1-$2.$3.',
};

export const REGEX_CNJ_QUATRO = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})/),
  replace: '$1-$2.$3.$4.',
};

export const REGEX_CNJ_CINCO = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})/),
  replace: '$1-$2.$3.$4.$5.',
};

export const REGEX_CNJ_SEM_FORMATACAO = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/),
  replace: '$1-$2.$3.$4.$5.$6',
};

export const REGEX_CNJ_COM_FORMATACAO = {
  regex: new RegExp(/^(\d{7})-(\d{2}).(\d{4}).(\d{1}).(\d{2}).(\d{4})/),
  replace: '$1$2$3$4$5$6',
};
