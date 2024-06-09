import Card from "@/components/atoms/Card";
import GameJoinForm from "@/components/organisms/GameJoinForm";
import GameCreateForm from "@/components/pages/GameCreateForm";
import RootLayout from "@/components/templates/layout";
import { STYLES } from "@/constants/styles";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

function HomeHeroCardContent() {
  const { t } = useTranslation("homepage");

  return (
    <div>
      <h2 className={STYLES.h2}>{t("HomeHeroCardContent.create")}</h2>
      <GameCreateForm />
      <div className="divider">{t("HomeHeroCardContent.or")}</div>
      <h2 className={STYLES.h2}>{t("HomeHeroCardContent.join")}</h2>
      <GameJoinForm />
    </div>
  );
}

export default function HomePage() {
  const { t, lang } = useTranslation("common");
  const { t: tHome } = useTranslation("homepage");

  return (
    <RootLayout lang={lang}>
      <Head>
        <title>{t("appName")}</title>
        <meta name="description" content={tHome("headline")}></meta>
      </Head>
      <Card>
        <HomeHeroCardContent />
      </Card>
    </RootLayout>
  );
}
