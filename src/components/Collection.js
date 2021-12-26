import {useState, useContext, useEffect} from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import Brand from './Brand'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import MainContext from '../MainContext'
import {GrLinkPrevious} from 'react-icons/gr'
import Loader from './Loader'

function Collection() {

    const {slugs} = useParams()
    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)

    const history = useNavigate ();

    const clearSelectedBrands = () => {
        setSelectedBrands([])
        history.push('/')
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])


    return (
        <main className='content'>
            <header className='header'>
                
                <Link to="/" onClick={clearSelectedBrands}>
                    
                    <button className='back-btn'>
                        <GrLinkPrevious/> All Brands
                    </button>
                </Link>

                {selectedBrands.length > 0 && <Download/>}
            </header>
            <section className='brands'>
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return(
                            <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader/>}>
                                <Brand key={brand.slug} brand={brand} />
                            </LazyLoad>
                        
                    )
                })}
            </section>
        </main>
    )
}

export default Collection
