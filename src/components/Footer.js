// Functional Component

function Footer(props) {
    return (
        <div class="mt-10 mb-4">
            <button onClick={() => props.clicked()}>Klik me!</button>
            
            <p className="font-medium text-xs text-slate-300 text-center">Dibuat dengan <span className="text-red-500">❤</span> oleh <span className="font-bold text-accent">Akbar Wibowo Putra</span> menggunakan <span  className="font-bold text-[#06B6D4]">Tailwind CSS</span>.</p>
        </div>
    );
}

export default Footer;