import { motion } from "motion/react";

export default function TopDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Nusa Penida",
      trips: 2,
      image:
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/s836dd7wi18s8igivspg/TripSehariankeNusaPenidadariBali-KlookIndonesia.jpg",
    },
    {
      id: 2,
      name: "Ubud",
      trips: 7,
      image:
        "https://thebalisun.com/wp-content/uploads/2023/07/Tourists-Are-Using-Balis-Ubud-As-A-Launchpad-To-Explore-Unique-Parts-Of-The-Island.jpg",
    },
    {
      id: 3,
      name: "Bedugul",
      trips: 3,
      image:
        "https://awsimages.detik.net.id/community/media/visual/2020/08/07/pura-di-bedugul-bali_169.jpeg?w=1200",
    },
    {
      id: 4,
      name: "Candidasa",
      trips: 2,
      image:
        "https://mediaim.expedia.com/destination/1/b90bb6101ca8a0c6b99e3032b823fbb2.jpg",
    },
  ];

  return (
    <section id="top-destinations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Top Destinations
          </h2>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Trip Badge */}
                <div className="absolute top-4 left-4 bg-slate-700/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  ({destination.trips} Trips)
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Destination Name */}
              <h3 className="text-xl font-semibold text-slate-800 text-center">
                {destination.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
