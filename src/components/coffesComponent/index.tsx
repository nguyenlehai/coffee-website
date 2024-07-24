import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { MockDataAll, MockDataCoffee, MockDataTea, MockDataJuices, CoffeeItem } from "./mock-data";
import Button from "../button";
import locationIcon from '/images/location-48.png';
import facebookIcon from '/images/facebook-48.png';
import kakaotalkIcon from '/images/kakaotalk-48.png';
import zaloIcon from '/images/zalo-48.png';
import whatsappIcon from '/images/whatsapp-48.png';

function Coffee() {
  const { t } = useTranslation();
  const [coffeeData, setCoffeeData] = useState<CoffeeItem[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setCoffeeData(MockDataAll);
  }, []);

  const handleFacebook = () => {
    window.open('https://www.facebook.com/HanaCoffeeTea.Danang')
  }

  const handleKakaoTalk = () => {
    window.open('https://open.kakao.com/me/hanacoffee');
  }

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    switch (filter) {
      case 'all':
        setCoffeeData(MockDataAll);
        break;
      case 'coffee':
        setCoffeeData(MockDataCoffee);
        break;
      case 'tea':
        setCoffeeData(MockDataTea);
        break;
      case 'juices':
        setCoffeeData(MockDataJuices);
        break;
      default:
        setCoffeeData(MockDataAll);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-[#FEF7EE] mb-4">{t('title')}</h1>
      <div>

        <div className='text-[#FEF7EE]'><u><b>{t('contactWithUs')}</b></u>
          <div className='pt-2 text-green-500 font-bold cursor-pointer' onClick={handleFacebook}>
            <span className="flex items-center">
              <img src={locationIcon} alt="location icon" className="w-6 h-6 mr-2"/>
              <span>{t('address')}</span>
            </span>
          </div>
          <div className='pt-2 text-green-500 font-bold cursor-pointer' onClick={handleFacebook}>
            <span className="flex items-center">
              <img src={facebookIcon} alt="facebook icon" className="w-6 h-6 mr-2"/>
              <span>Hana - Coffee & Tea Đà Nẵng</span>
            </span>
          </div>
          <div className='pt-2 text-yellow-500 font-bold cursor-pointer' onClick={handleKakaoTalk}>
            <span className="flex items-center">
              <img src={kakaotalkIcon} alt="kakaotalk icon" className="w-6 h-6 mr-2"/>
              <span>hanacoffe</span>
            </span>
          </div>
          <div className='pt-2 text-red-500 font-bold'>
            <span className="flex items-center">
              <img src={zaloIcon} alt="zalo icon" className="w-6 h-6 mr-2"/>
              <span>(+84)5599 24296</span>
            </span>
          </div>
          <div className='pt-2 text-red-500 font-bold'>
            <span className="flex items-center">
              <img src={whatsappIcon} alt="whatsapp icon" className="w-6 h-6 mr-2"/>
              <span>(+84)5599 24296</span>
            </span>
          </div>
        </div>
      </div>
      <div className="text-center z-20 px-4 pb-4 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button
            variant={activeFilter === 'all' ? "active" : "inactive"}
            text={t('allProducts')}
            onClick={() => handleFilter('all')}
          />
          <Button
            variant={activeFilter === 'coffee' ? "active" : "inactive"}
            text={t('coffee')}
            onClick={() => handleFilter('coffee')}
          />
          <Button
            variant={activeFilter === 'juices' ? "active" : "inactive"}
            text={t('juices')}
            onClick={() => handleFilter('juices')}
          />
          <Button
            variant={activeFilter === 'tea' ? "active" : "inactive"}
            text={t('tea')}
            onClick={() => handleFilter('tea')}
          />
        </div>
      </div>

      {/* Coffee items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffeeData.map((coffee: CoffeeItem) => (
          <div key={coffee.id} className="bg-[#1C1F22] rounded-lg overflow-hidden relative">
            {coffee.popular && (
              <div className="absolute top-0 left-0 bg-green-500 text-black px-2 py-1 m-2 rounded z-10">
                {t('bestSeller')}
              </div>
            )}
            {coffee.soldOut && (
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 rounded z-10">
                {t('soldOut')}
              </div>
            )}
            <img src={coffee.image} alt={t(coffee.nameKey)} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-[#FEF7EE]">{t(coffee.nameKey)}</h2>
                <span className="bg-[#F6C768] text-black px-2 py-1 rounded">{coffee.price}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#F6C768] mr-2">★</span>
                <span className="text-[#FEF7EE]">{coffee.rating}</span>
                <span className="text-[#6F757C] ml-2">
                  {/*({coffee.votes} {t('votes')})*/}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffee;