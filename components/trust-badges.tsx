import { Users, Award, Clock, Shield } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Users,
      number: "1,000+",
      text: "Happy Customers",
      color: "text-blue-600",
    },
    {
      icon: Award,
      number: "5+",
      text: "Years Experience",
      color: "text-green-600",
    },
    {
      icon: Clock,
      number: "30min",
      text: "Average Repair Time",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      number: "6mo",
      text: "Warranty Period",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <div key={index} className="text-center">
                <IconComponent className={`h-12 w-12 ${badge.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-800 mb-2">{badge.number}</div>
                <div className="text-gray-600 font-medium">{badge.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
