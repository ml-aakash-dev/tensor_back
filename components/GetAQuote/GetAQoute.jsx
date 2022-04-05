import styles from './styles.module.css'

const GetAQoute = () => {
    return (
        <section className={styles.get_a_quote}>
        <div className={styles.get_a_quote_content}>
            <h3 className='heading'>
                <span>
                    Ready To discucss Your Project
                </span>
            </h3>
            <button className='btn btnLg mt2'> Get a Quote</button>
        </div>
    </section>
    )
}

export default GetAQoute
