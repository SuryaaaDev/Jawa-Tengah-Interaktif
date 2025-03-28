const Footer=()=>{
    return(
        <>
            <footer>
                <div class="content-footer">
                    <div class="left-footer">
                        <img src="assets/logo-footer.png" width="300" alt="" />
                        <div class="desc-footer">Jawa Tengah Interaktif menghadirkan eksplorasi budaya, wisata, dan sejarah dalam satu platform. Dengan fitur unggulan seperti peta interaktif, agenda event, dan informasi kuliner khas, ini adalah portal ideal untuk mengenal Jawa Tengah lebih dekat.</div>
                    </div>
                    <div class="center-footer">
                        <h4 class="title-feature">Fitur</h4>
                        <a href="/artikel" >Artikel</a>
                        <a href="/kamus" style={{ marginTop: '10px' }}>Kamus</a>
                        <a href="/tradisi" style={{ marginTop: '10px' }}>Tradisi</a>
                        <a href="/cerita-rakyat" style={{ marginTop: '10px' }}>Cerita Rakyat</a>
                    </div>
                    <div class="right-footer">
                        <h4 class="title-feature">Bekerja sama dengan</h4>
                        <div style={{ fontWeight: '200', fontSize: '.9rem' }}>Dinas Pariwisata Jawa Tengah</div>
                        <div style={{ fontWeight: '200', fontSize: '.9rem', marginTop: '10px' }}>Dinas Kebudayaan & Pendidikan</div>
                        <div style={{ fontWeight: '200', fontSize: '.9rem', marginTop: '10px' }}>BMKG</div>

                    </div>
                </div>
            </footer>
</>
    )
}
export default Footer