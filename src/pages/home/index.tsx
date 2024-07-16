import CoffeeAll from "../../components/coffee"
import {useTranslation} from 'react-i18next';

function Home() {
  const {i18n} = useTranslation();

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

      </div>
    </>
  )
}

export default Home