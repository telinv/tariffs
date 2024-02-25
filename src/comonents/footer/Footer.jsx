import  './footer.css'
export default function Footer({speed}){
    return(
        <div className="footer">
            <footer>
                <p className='speed'>{speed}</p>
                <span className='footerText'>Объем включенного трафика не ограничен</span>
            </footer>
        </div>
    )

}