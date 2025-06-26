import { DeviceRepairPage } from "@/components/device-repair-page"
import { notFound } from "next/navigation"

const deviceData = {
  iphone: {
    name: "iPhone",
    title: "iPhone Repair Services",
    description: "Professional iPhone repair services with genuine parts and expert technicians",
    color: "from-gray-600 to-gray-800",
    services: [
      {
        name: "Screen Replacement",
        price: "₹2,500 - ₹8,500",
        time: "30 minutes",
        description: "Original quality LCD/OLED display replacement",
      },
      {
        name: "Battery Replacement",
        price: "₹1,500 - ₹3,500",
        time: "20 minutes",
        description: "High capacity battery with 6 months warranty",
      },
      {
        name: "Camera Repair",
        price: "₹2,000 - ₹5,000",
        time: "45 minutes",
        description: "Front and rear camera module replacement",
      },
      {
        name: "Water Damage Repair",
        price: "₹3,000 - ₹7,000",
        time: "2-4 hours",
        description: "Complete water damage assessment and repair",
      },
    ],
    commonIssues: [
      "Cracked or broken screen",
      "Battery draining quickly",
      "Camera not working",
      "Water damage",
      "Charging port issues",
      "Speaker problems",
    ],
    models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone X", "iPhone 8", "iPhone 7"],
  },
  samsung: {
    name: "Samsung",
    title: "Samsung Repair Services",
    description: "Expert Samsung Galaxy repair services for all models",
    color: "from-blue-500 to-blue-700",
    services: [
      {
        name: "Display Repair",
        price: "₹2,000 - ₹7,000",
        time: "35 minutes",
        description: "AMOLED/Super AMOLED display replacement",
      },
      {
        name: "Charging Port Repair",
        price: "₹800 - ₹2,000",
        time: "25 minutes",
        description: "USB-C charging port replacement",
      },
      {
        name: "Speaker Repair",
        price: "₹1,200 - ₹2,500",
        time: "30 minutes",
        description: "Earpiece and loudspeaker replacement",
      },
      {
        name: "Software Issues",
        price: "₹500 - ₹1,500",
        time: "1-2 hours",
        description: "Software troubleshooting and updates",
      },
    ],
    commonIssues: [
      "Screen flickering or black screen",
      "Slow charging or not charging",
      "Speaker not working",
      "Software glitches",
      "Overheating issues",
      "Camera focus problems",
    ],
    models: ["Galaxy S24", "Galaxy S23", "Galaxy S22", "Galaxy Note 20", "Galaxy A54", "Galaxy A34", "Galaxy M34"],
  },
  oneplus: {
    name: "OnePlus",
    title: "OnePlus Repair Services",
    description: "Specialized OnePlus repair services with fast charging solutions",
    color: "from-red-500 to-red-700",
    services: [
      {
        name: "Fast Charging Repair",
        price: "₹1,500 - ₹3,000",
        time: "40 minutes",
        description: "Warp/Dash charging port and cable repair",
      },
      {
        name: "Screen Replacement",
        price: "₹2,200 - ₹6,500",
        time: "35 minutes",
        description: "Fluid AMOLED display replacement",
      },
      {
        name: "Button Repair",
        price: "₹800 - ₹1,800",
        time: "25 minutes",
        description: "Power button and volume button repair",
      },
      {
        name: "Performance Issues",
        price: "₹800 - ₹2,000",
        time: "1-3 hours",
        description: "Software optimization and performance tuning",
      },
    ],
    commonIssues: [
      "Fast charging not working",
      "Screen touch issues",
      "Button not responding",
      "Performance lag",
      "Heating during charging",
      "Camera app crashes",
    ],
    models: [
      "OnePlus 12",
      "OnePlus 11",
      "OnePlus 10 Pro",
      "OnePlus 9",
      "OnePlus 8T",
      "OnePlus Nord 3",
      "OnePlus Nord CE 3",
    ],
  },
  tablet: {
    name: "Tablets",
    title: "Tablet Repair Services",
    description: "Professional tablet repair services for iPad and Android tablets",
    color: "from-purple-500 to-purple-700",
    services: [
      {
        name: "Screen Replacement",
        price: "₹3,000 - ₹12,000",
        time: "1-2 hours",
        description: "LCD/OLED tablet screen replacement",
      },
      {
        name: "Battery Replacement",
        price: "₹2,000 - ₹5,000",
        time: "1 hour",
        description: "High capacity tablet battery replacement",
      },
      {
        name: "Charging Problems",
        price: "₹1,000 - ₹3,000",
        time: "45 minutes",
        description: "Charging port and cable issues",
      },
      {
        name: "Software Updates",
        price: "₹800 - ₹2,000",
        time: "2-4 hours",
        description: "OS updates and software troubleshooting",
      },
    ],
    commonIssues: [
      "Cracked tablet screen",
      "Battery not holding charge",
      "Charging port damaged",
      "Software running slow",
      "Touch screen not responsive",
      "Wi-Fi connectivity issues",
    ],
    models: ["iPad Pro", "iPad Air", "iPad Mini", "Samsung Galaxy Tab", "Lenovo Tab", "Huawei MatePad", "Amazon Fire"],
  },
  laptop: {
    name: "Laptops",
    title: "Laptop Repair Services",
    description: "Complete laptop repair services for hardware and software issues",
    color: "from-green-500 to-green-700",
    services: [
      {
        name: "Screen Repair",
        price: "₹4,000 - ₹15,000",
        time: "2-4 hours",
        description: "LCD/LED laptop screen replacement",
      },
      {
        name: "Keyboard Repair",
        price: "₹1,500 - ₹4,000",
        time: "1-2 hours",
        description: "Individual key or complete keyboard replacement",
      },
      {
        name: "Performance Boost",
        price: "₹1,000 - ₹3,000",
        time: "2-6 hours",
        description: "RAM upgrade, SSD installation, system cleanup",
      },
      {
        name: "Virus Removal",
        price: "₹800 - ₹2,000",
        time: "2-4 hours",
        description: "Complete virus removal and system security",
      },
    ],
    commonIssues: [
      "Laptop screen flickering",
      "Keyboard keys not working",
      "Slow performance",
      "Virus and malware",
      "Overheating problems",
      "Hard drive failure",
    ],
    models: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MacBook", "MSI", "Toshiba"],
  },
  accessories: {
    name: "Accessories",
    title: "Mobile Accessories Repair",
    description: "Repair services for earphones, smartwatches, and mobile accessories",
    color: "from-orange-500 to-orange-700",
    services: [
      {
        name: "Earphone Repair",
        price: "₹300 - ₹1,500",
        time: "30 minutes",
        description: "Wire replacement and driver repair",
      },
      {
        name: "Smartwatch Repair",
        price: "₹1,000 - ₹4,000",
        time: "1-2 hours",
        description: "Screen, battery, and strap replacement",
      },
      {
        name: "Cable Replacement",
        price: "₹200 - ₹800",
        time: "15 minutes",
        description: "USB, Type-C, Lightning cable repair",
      },
      {
        name: "Bluetooth Issues",
        price: "₹500 - ₹1,500",
        time: "30-60 minutes",
        description: "Bluetooth connectivity troubleshooting",
      },
    ],
    commonIssues: [
      "Earphone wire damage",
      "Smartwatch not charging",
      "Cable not working",
      "Bluetooth pairing issues",
      "Power bank not charging",
      "Speaker distortion",
    ],
    models: ["AirPods", "Samsung Buds", "OnePlus Buds", "Apple Watch", "Samsung Watch", "Fitbit", "Mi Band"],
  },
}

export default function DevicePage({ params }: { params: { device: string } }) {
  const device = deviceData[params.device as keyof typeof deviceData]

  if (!device) {
    notFound()
  }

  return <DeviceRepairPage device={device} deviceId={params.device} />
}

export function generateStaticParams() {
  return Object.keys(deviceData).map((device) => ({
    device: device,
  }))
}
