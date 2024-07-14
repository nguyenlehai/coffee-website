import CoffeeAll from "../../components/coffee"
import {useTranslation} from 'react-i18next';

function Home() {
  const {i18n} = useTranslation();
  const {t} = useTranslation();

  const handleFacebook = () => {
    window.open('https://www.facebook.com/HanaCoffeeTea.Danang')
  }

  const handleKakaoTalk = () => {
    window.open('https://open.kakao.com/me/hanacoffee');
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  console.log(i18n.language)

  return (
    <>
      <img
        src="./images/bg-cafe.jpg"
        alt=""
        className="w-full h-auto"
      />
      <div className="w-full flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[1550px] shadow-md rounded-3xl bg-[#1B1D1F] z-10">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[1300px] relative py-4 flex flex-col items-center justify-center">
              {/* Language switcher buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => changeLanguage('vi')}
                  className={`px-4 py-2 text-black rounded hover:bg-[#e5b75f] ${i18n.language === 'vi' ? 'bg-[#F6C768]' : 'bg-[#6F757C]'}`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-4 py-2 text-black rounded hover:bg-[#e5b75f] ${i18n.language === 'en' ? 'bg-[#F6C768]' : 'bg-[#6F757C]'}`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('kr')}
                  className={`px-4 py-2 text-black rounded hover:bg-[#e5b75f] ${i18n.language === 'kr' ? 'bg-[#F6C768]' : 'bg-[#6F757C]'}`}
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CoffeeAll/>
          </div>
        </div>
      </div>
      <div className="px-10 pt-4 pb-8 items-start text-left">
        <div className='text-[#FEF7EE]'>{t('address')}</div>
        <div className='text-[#FEF7EE]'>{t('contactWithUs')}
          <div className='pt-2 text-green-500 font-bold text-2xl' onClick={handleFacebook}>
            <span className="inline-flex align-middle">
              Facebook: Hana - Coffee & Tea Đà Nẵng
            </span>
          </div>
          <div className='pt-4 text-yellow-500 font-bold text-2xl' onClick={handleKakaoTalk}>
            <span className="inline-flex align-middle">
              Kakaotalk: hanacoffe
            </span>
          </div>
          <div className='pt-4 text-red-500 font-bold text-2xl'>
            <span className="inline-flex align-middle">
              Zalo: (+84)5599 24296
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home