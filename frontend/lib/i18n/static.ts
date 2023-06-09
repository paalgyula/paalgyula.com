import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";

export const getI18nPaths = () => {
  const paths = i18nextConfig.i18n.locales.map((locale) => ({
    params: {
      locale,
    },
  }));

  return paths;
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getI18nProps = async (ctx: any, ns: string[] = ["common"]) => {
  const locale = ctx?.params?.locale;
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  };
  return props;
};

export const makeStaticProps = (ns: string[] = []) => {
  return async (ctx: any) => ({
    props: await getI18nProps(ctx, ns),
  });
};
