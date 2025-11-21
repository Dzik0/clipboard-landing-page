import ArticleOne from "./Components/ArticleOne/ArticleOne";
import ArticleImageOne from "./Components/ArticleOne/ArticleImageOne";
import ArticleInfoOne from "./Components/ArticleOne/ArticleInfoOne";
import ArticleTitleOne from "./Components/ArticleOne/ArticleTitleOne";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Logo from "./Components/LogosComponent/Logo";
import LogoContainer from "./Components/LogosComponent/LogosContainer";
import logo from "/logo.svg";
import google from "/logo-google.png";
import ibm from "/logo-ibm.png";
import microsoft from "/logo-microsoft.png";
import hp from "/logo-hp.png";
import vector from "/logo-vector.png";
import PerksContainer from "./Components/PerksComponent/PerksContainer";
import PerksTitle from "./Components/PerksComponent/PerksTitle";
import PerksInfo from "./Components/PerksComponent/PerksInfo";
import SinglePerk from "./Components/PerksComponent/SinglePerk/SinglePerk";
import SinglePerkTitle from "./Components/PerksComponent/SinglePerk/SinglePerkTitle";
import SinglePerkImage from "./Components/PerksComponent/SinglePerk/SinglePerkImage";
import SinglePerkInfo from "./Components/PerksComponent/SinglePerk/SinglePerkInfo";
import blacklist from "/icon-blacklist.svg";
import text from "/icon-text.svg";
import preview from "/icon-preview.svg";
import device from "/image-devices.png";
import computer from "/image-computer.png";
import ArticleTwo from "./Components/ArticleTwo/ArticleTwo";
import ArticleTitleTwo from "./Components/ArticleTwo/ArticleTitleTwo";
import ArticleInfoTwo from "./Components/ArticleTwo/ArticleInfoTwo";
import ArticleImageTwo from "./Components/ArticleTwo/ArticleImageTwo";
import ArticlePerkTwo from "./Components/ArticleTwo/ArticlePerkTwo";
import ArticlePerkTitleTwo from "./Components/ArticleTwo/ArticlePerkTitleTwo";
import ArticlePerkInfoTwo from "./Components/ArticleTwo/ArticlePerkInfoTwo";

export default function App() {
  return (
    <div>
      <main className="mx-auto max-w-[1000px] overflow-hidden px-5">
        <ArticleOne>
          <ArticleImageOne src={logo} />
          <div className="flex flex-col gap-5">
            <ArticleTitleOne>A history of everything you copy</ArticleTitleOne>
            <ArticleInfoOne>
              Clipboard allows you to track and organize everything you copy.
              Instatly access your clipboard on all your devices.
            </ArticleInfoOne>
          </div>
          <div className="flex w-full flex-col gap-5 md:flex-row md:justify-center">
            <Button>Download for iOS</Button>
            <Button bgColor="blue">Download for Mac</Button>
          </div>
        </ArticleOne>

        <ArticleTwo>
          <div className="flex flex-col gap-5 text-center">
            <ArticleTitleTwo>Keep track of your snippets</ArticleTitleTwo>
            <ArticleInfoTwo>
              Clipboard instatntly stores any item you copy in the cloud,
              meaning you can access your snippets immediatly on all your
              devices. Our Mac and iOS apps will help you organize everything.
            </ArticleInfoTwo>
          </div>
          <div className="flex flex-col gap-20 md:flex-row">
            <ArticleImageTwo src={computer} />
            <div className="flex flex-col gap-15">
              <ArticlePerkTwo>
                <ArticlePerkTitleTwo>Quick Search</ArticlePerkTitleTwo>
                <ArticlePerkInfoTwo>
                  Easily search your snippets by content, category, web adress,
                  application and more.
                </ArticlePerkInfoTwo>
              </ArticlePerkTwo>

              <ArticlePerkTwo>
                <ArticlePerkTitleTwo>iCloud Sync</ArticlePerkTitleTwo>
                <ArticlePerkInfoTwo>
                  Instantly saves and synces snippets across all your devices.
                </ArticlePerkInfoTwo>
              </ArticlePerkTwo>

              <ArticlePerkTwo>
                <ArticlePerkTitleTwo>Complete History</ArticlePerkTitleTwo>
                <ArticlePerkInfoTwo>
                  Retrive any snippets from the first moment you started using
                  the app.
                </ArticlePerkInfoTwo>
              </ArticlePerkTwo>
            </div>
          </div>
        </ArticleTwo>

        <ArticleOne>
          <ArticleTitleOne>Access Clipboard Anywhere</ArticleTitleOne>
          <ArticleInfoOne>
            Whether you're on the go or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </ArticleInfoOne>
          <ArticleImageOne src={device} />
        </ArticleOne>

        <PerksContainer>
          <div className="flex flex-col gap-5 text-center">
            <PerksTitle>Supercharge your workflow</PerksTitle>
            <PerksInfo>
              We've got the tools to boost your productivity.
            </PerksInfo>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-start">
            <SinglePerk>
              <SinglePerkImage src={blacklist} />
              <SinglePerkTitle>Create blacklists</SinglePerkTitle>
              <SinglePerkInfo>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkImage src={text} />
              <SinglePerkTitle>Plain text snippets</SinglePerkTitle>
              <SinglePerkInfo>
                Remove unwanted formatting from copied text for a consistent
                look.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkImage src={preview} />
              <SinglePerkTitle>Sneak preview</SinglePerkTitle>
              <SinglePerkInfo>
                Quick preview of all snippets on your Clipboard for easy access.
              </SinglePerkInfo>
            </SinglePerk>
          </div>
        </PerksContainer>

        <LogoContainer>
          <Logo src={google} />
          <Logo src={ibm} />
          <Logo src={microsoft} />
          <Logo src={hp} />
          <Logo src={vector} />
        </LogoContainer>

        <ArticleOne>
          <div className="flex flex-col gap-5">
            <ArticleTitleOne>Clipboard for iOS and Mac OS</ArticleTitleOne>
            <ArticleInfoOne>
              Avaible for free on the App store. Download for Mac OS or iOS,
              sync with iCloud and you're ready to start adding to your
              clipboard.
            </ArticleInfoOne>
          </div>
          <div className="flex w-full flex-col gap-5 md:flex-row md:justify-center">
            <Button>Download for iOS</Button>
            <Button bgColor="blue">Download for Mac</Button>
          </div>
        </ArticleOne>
      </main>

      <Footer />
    </div>
  );
}
