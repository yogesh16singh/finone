const people = [
    {
      name: 'Yogesh Singh',
      role: 'Fullstack developer',
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQEUju7iXlT_xQ/profile-displayphoto-shrink_400_400/0/1658134881229?e=1721260800&v=beta&t=l8Yu5W065SRawJvQissrIrU0HI6VElNrR15NBZy2byU'},
    {
      name:'Rajvansh Malani ',
      role:'Fullstack developer',
      imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQHTk_LZJrQW6g/profile-displayphoto-shrink_400_400/0/1690736196920?e=1721260800&v=beta&t=28pEG4LNZoKYewE90JTXJcx7pIA01aHyiAY60gjV-mI'
    },
    {
      name:'Rakshank Verma',
      role:'Machine Learning Engineer',
      imageUrl:'https://media.licdn.com/dms/image/D5603AQFVksATukvuEA/profile-displayphoto-shrink_100_100/0/1710687995436?e=1721260800&v=beta&t=QTmG3kGc1O8LhtCPoJ_bsh6NF868DS66iuppHzNV4BY'
    }
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-[#f5f5fa] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold font-mono tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg font-mono leading-8 text-gray-600">
             We are a Team of Three Developers build a Project which uses AI model to Edit Photos and Video.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  