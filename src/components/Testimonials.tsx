import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

import { useLanguage } from '@/context/LanguageContext';
export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      name: 'Emma Johnson',
      location: t('testimonials.t1Location'),
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      comment: t('testimonials.t1Comment'),
      date: t('testimonials.t1Date'),
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: t('testimonials.t2Location'),
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      comment: t('testimonials.t2Comment'),
      date: t('testimonials.t2Date'),
    },
    {
      id: 3,
      name: 'Sophia Harper',
      location: t('testimonials.t3Location'),
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment: t('testimonials.t3Comment'),
      date: t('testimonials.t3Date'),
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-emerald-200">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Avatar and Info */}
              <div className="flex items-center mb-4 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-800 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-600 leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              {/* Date */}
              <p className="text-sm text-slate-400">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
