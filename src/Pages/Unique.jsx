
import { useNavigate } from 'react-router-dom'
import { dataProvider } from '../Components/ContextProvider';
import { useEffect } from 'react';

const Unique = () => {




  

  const navigate=useNavigate();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = localStorage.getItem("user");

  const unique=[data?JSON.parse(data):[]]


  function backFunc() {
    navigate(-1)
  }

 
  return (
    <div className="flex flex-col gap-8 px-4">

      {/* Top Gradient Divider */}
      <div className="h-[4px] w-full bg-gradient-to-r
                      from-[#F472B6] via-[#A78BFA] to-[#38BDF8] opacity-70" />

      {unique.map((obj, index) => {
        return (
          <div
            key={index}
            className="
              max-w-[1000px] m-auto
              bg-[#111827]
              border border-[#1F2937]
              rounded-2xl
              overflow-hidden

              transition-all duration-500
              hover:border-[#6366F1]/50
              hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >

            <div className="flex flex-col md:flex-row gap-6">

              {/* Image */}
              <div className="md:w-[55%] w-full overflow-hidden">
                <img
                  src={obj.urlToImage}
                  alt=""
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    hover:scale-[1.05]
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 md:w-[45%]">

                <h3
                  className="
                    text-xl font-semibold leading-snug
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
                  "
                >
                  {obj.title}
                </h3>

                <p className="text-sm text-[#E5E7EB] leading-relaxed">
                  {obj.content}
                </p>

                {obj.description && (
                  <p className="text-sm text-[#9CA3AF]">
                    {obj.description}
                  </p>
                )}

                {/* Buttons */}
                <div className="mt-4 flex gap-3">

                  <button
                    onClick={backFunc}
                    className="
                      px-4 py-2 rounded-lg
                      border border-[#1F2937]
                      text-[#E5E7EB]

                      transition-all duration-300
                      hover:bg-[#1F2937]
                      hover:scale-[1.03]
                      active:scale-[0.97]
                    "
                  >
                    ← Back
                  </button>

                  <a
                    href={obj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2 rounded-lg
                      text-white font-medium

                      bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#38BDF8]
                      transition-all duration-300
                      hover:opacity-90
                      hover:scale-[1.03]
                      active:scale-[0.97]
                    "
                  >
                    Visit Source →
                  </a>

                </div>

              </div>

            </div>

          </div>
        )
      })}

      {/* Bottom Gradient Divider */}
      <div className="h-[4px] w-full bg-gradient-to-r
                      from-[#F472B6] via-[#A78BFA] to-[#38BDF8] opacity-70" />

    </div>
  )
}

export default Unique;
