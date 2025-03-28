import { useEffect } from "react";
import { useState } from "react";

const Kamus = () => {
    const text = "NGOKO | KRAMA MADYA | KRAMA INGGIL";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                setIndex(index + 1);
            } else if (isDeleting && index > 0) {
                setDisplayText(text.slice(0, index - 1));
                setIndex(index - 1);
            } else if (index === text.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Tunggu 1 detik sebelum mulai menghapus
            } else if (index === 0 && isDeleting) {
                setIsDeleting(false);
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);
    return (
        <>
            <section id="kamus">
                <div className="col-kamus">
                    <div className="header-kamus">
                        <div className="left-header-kamus">
                            <div className="title-header-kamus">PENERJEMAH UNTUK 100+  BAHASA JAWA</div>
                            <div className="desc-header-kamus">"Penerjemah untuk 100+ Bahasa Jawa" adalah alat terjemahan canggih yang dapat menerjemahkan lebih dari 100 bahasa ke dalam Bahasa Jawa dan sebaliknya."</div>
                            <div className="text-bahasa">{displayText}|</div>
                            <div className="col-btn-kamus">

                                <a href="#col-card-kamus"> <button className="btn-kamus">Lihat Kamus Sekarang</button></a>
                                <div className="line-kamus"></div>
                            </div>
                        </div>
                        <div className="right-header-kamus">
                            <img src="assets/img-penerjemah.png" style={{ marginTop: "-10px" }} width={450} alt="" />
                        </div>
                    </div>
                    <div id="col-card-kamus"></div>
                    <div className="col-card-kamus" >
                        <div className="card-kamus">
                            <div className="box-number">1</div>
                            <div className="title-card-kamus">Aku</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Aku</div>
                            <div className="text-madya">Krama Madya : Kula</div>
                            <div className="text-inggil">Krama Inggil : Dhalem / Abdi</div>
                        </div>
                    
                        <div className="card-kamus">
                            <div className="box-number">2</div>
                            <div className="title-card-kamus">Kamu</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Kowe</div>
                            <div className="text-madya">Krama Madya : Panjenengan</div>
                            <div className="text-inggil">Krama Inggil : Sampeyan</div>
                        </div>
                    
                        <div className="card-kamus">
                            <div className="box-number">3</div>
                            <div className="title-card-kamus">Makan</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Mangan</div>
                            <div className="text-madya">Krama Madya : Nedha</div>
                            <div className="text-inggil">Krama Inggil : Dhahar</div>
                        </div>
                      
                        <div className="card-kamus">
                            <div className="box-number">4</div>
                            <div className="title-card-kamus">Minum</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Ngombe</div>
                            <div className="text-madya">Krama Madya : Ngunjuk</div>
                            <div className="text-inggil">Krama Inggil : Ngunjuk</div>
                        </div>
                       
                        <div className="card-kamus">
                            <div className="box-number">5</div>
                            <div className="title-card-kamus">Tidur</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Turu</div>
                            <div className="text-madya">Krama Madya : Sare</div>
                            <div className="text-inggil">Krama Inggil : Tilem</div>
                        </div>
                        
                     
                        <div className="card-kamus">
                            <div className="box-number">6</div>
                            <div className="title-card-kamus">Rumah</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Omah</div>
                            <div className="text-madya">Krama Madya : Griya</div>
                            <div className="text-inggil">Krama Inggil : Dalem</div>
                        </div>
                        <div className="card-kamus">
                            <div className="box-number">7</div>
                            <div className="title-card-kamus">Melihat</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Ndelok</div>
                            <div className="text-madya">Krama Madya : Nonton</div>
                            <div className="text-inggil">Krama Inggil : Mriksani</div>
                        </div>
                        <div className="card-kamus">
                            <div className="box-number">8</div>
                            <div className="title-card-kamus">Anak</div>
                            <div className="line-card-kampus"> </div>
                            <div className="text-ngoko">Ngoko : Bocah</div>
                            <div className="text-madya">Krama Madya : Putra</div>
                            <div className="text-inggil">Krama Inggil : Putra Dalem</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Kamus