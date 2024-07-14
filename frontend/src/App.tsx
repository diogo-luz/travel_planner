import { MapPin, Calendar } from 'lucide-react';

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide os seus amigos e planeie a sua próxima viagem!</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Para onde vai?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>

          <button>
            Continuar
          </button>
        </div>
        
        <p className="text-zinc-500 text-sm">
          Ao planear a sua viagem com o plann.er está a concordar com os <br /> 
          nossos <a className="text-zinc-300 underline" href="#">termos de utilização</a> e <a className="text-zinc-300 underline" href="#">política de privacidade</a>.
        </p>
      </div>
    </div>
  )
}
