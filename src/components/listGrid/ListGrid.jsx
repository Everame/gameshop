import React, { useEffect, useRef } from 'react'
import LisItem from '../../ui/listItem/ListItem';
import Loader from '../../ui/loader/Loader';
import "./listGrid.scss";
import { useTranslation } from 'react-i18next';

export default function ListGrid({list, type, getData, isLoading, end}) {
    const ref = useRef(null);
    const {t} = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                getData()
            }
        });
        observer.observe(ref.current);
        return () => {observer.disconnect()};
      }, []);
  return (
    <>
        {
        type === 'genres' ? 
            <h1 >{t('genres')}</h1> : <h1>{t("developers")}</h1>
        }
        <div id="listGrid">
            {list?.map((item) => {
                return <LisItem title={item.name} type={type} image={item.image_background} gamesCount={item.gamesCount} slug={item.slug} /> 
            })}
        </div>
        <div id="loaderCont" ref={ref}>
            {isLoading ? <Loader/> : null}
            {end ? <h4>{t('end')}</h4> : null}
        </div>
    </>
  )
}
