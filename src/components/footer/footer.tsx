import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.content}>
                <h2>About This Project</h2>

                <p>
                    IsEarthStillWarming.com is a simple climate dashboard that presents
                    key indicators of global warming, including atmospheric CO₂
                    concentration, global temperature anomaly, sea level rise, and Arctic
                    sea ice change.
                </p>

                <p>
                    The goal is clarity: show the trend, reference major scientific
                    institutions, and make climate information easy to understand for
                    students, developers, educators, and the general public.
                </p>

                <div className={styles.divider} />

                <p className={styles.meta}>
                    Data inspired by NASA, NOAA, and Scripps Institution of Oceanography.
                </p>

            </div>
            <div className={styles.bottomStrip} />
        </footer>
    );
};

export default Footer;