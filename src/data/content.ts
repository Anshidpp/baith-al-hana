import type { StaticImageData } from "next/image";
import allPurposeCleaner from "@/assets/imges/home-products/all purpose cleaner.jpeg";
import dishwashingLiquid from "@/assets/imges/home-products/dishwashing liqued.jpeg";
import disposableCups from "@/assets/imges/home-products/Disposable Cups – Bulk Carton.jpg";
import facialTissue from "@/assets/imges/home-products/Facial Tissue Pack.jpeg";
import foodContainerSet from "@/assets/imges/home-products/Food Container Set.jpeg";
import kitchenOrganizer from "@/assets/imges/home-products/Kitchen Organizer.jpeg";
import kitchenPaperRolls from "@/assets/imges/home-products/Kitchen Paper Rolls.jpg";
import laundryBasket from "@/assets/imges/home-products/Laundry Basket.jpeg";

// Central content. All products, prices and copy are DEMO placeholders until real data is supplied.
export type Channel = "retail" | "wholesale";
export type IconName = "spray" | "box" | "paper" | "home" | "check" | "heart" | "grid" | "users" | "mail" | "phone" | "pin" | "clock";

export interface Category { slug: string; name: string; blurb: string; icon: IconName }
export interface Product { id: string; name: string; category: string; channels: Channel[]; image: StaticImageData; demoPriceSar?: number }
export interface NavItem { label: string; href: string; children?: { label: string; href: string }[] }

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Branches", href: "/branches" },
  {
    label: "Careers", href: "/careers",
    children: [
      { label: "Baith Al Hana", href: "/careers/baith-al-hana" },
      { label: "House Care", href: "/careers/house-care" },
      { label: "Baith Al Hana Cafeteria", href: "/careers/cafeteria" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Shop", href: "/retail",
    children: [
      { label: "All products", href: "/retail" },
      { label: "Cleaning", href: "/retail?category=cleaning" },
      { label: "Plastic", href: "/retail?category=plastic" },
      { label: "Paper", href: "/retail?category=paper" },
      { label: "Household", href: "/retail?category=household" },
    ],
  },
];

export const categories: Category[] = [
  { slug: "cleaning", name: "Cleaning", blurb: "Surface, floor and dish cleaners, mops and cloths.", icon: "spray" },
  { slug: "plastic", name: "Plastic", blurb: "Containers, cups, bags and storage ware.", icon: "box" },
  { slug: "paper", name: "Paper", blurb: "Tissues, kitchen rolls, napkins and packaging paper.", icon: "paper" },
  { slug: "household", name: "Household", blurb: "Everyday items for the kitchen, laundry and home.", icon: "home" },
];

export const products: Product[] = [
  { id: "p1", name: "All-purpose cleaner", category: "Cleaning", channels: ["retail", "wholesale"], image: allPurposeCleaner, demoPriceSar: 14 },
  { id: "p2", name: "Dishwashing liquid", category: "Cleaning", channels: ["retail", "wholesale"], image: dishwashingLiquid, demoPriceSar: 9 },
  { id: "p3", name: "Food container set", category: "Plastic", channels: ["retail"], image: foodContainerSet, demoPriceSar: 29 },
  { id: "p4", name: "Disposable cups, bulk carton", category: "Plastic", channels: ["wholesale"], image: disposableCups },
  { id: "p5", name: "Facial tissue pack", category: "Paper", channels: ["retail", "wholesale"], image: facialTissue, demoPriceSar: 12 },
  { id: "p6", name: "Kitchen paper rolls, bulk carton", category: "Paper", channels: ["wholesale"], image: kitchenPaperRolls },
  { id: "p7", name: "Laundry basket", category: "Household", channels: ["retail"], image: laundryBasket, demoPriceSar: 35 },
  { id: "p8", name: "Kitchen organizer", category: "Household", channels: ["retail", "wholesale"], image: kitchenOrganizer, demoPriceSar: 24 },
];

export const divisions = [
  { name: "Baith Al Hana", note: "Trading center: retail and wholesale supplies." },
  { name: "House Care", note: "Placeholder: add a one-line description." },
  { name: "Baith Al Hana Cafeteria", note: "Placeholder: add a one-line description." },
];

// Branch and career entries are demo placeholders. Replace with real data.
export const branches = ["Branch 1 (placeholder)", "Branch 2 (placeholder)", "Branch 3 (placeholder)"];

export interface CareerDivision { slug: string; name: string; roles: string[] }
export const careerDivisions: CareerDivision[] = [
  { slug: "baith-al-hana", name: "Baith Al Hana", roles: ["Sales Associate (demo)", "Warehouse Assistant (demo)", "Customer Service (demo)"] },
  { slug: "house-care", name: "House Care", roles: ["Cleaning Supervisor (demo)", "Warehouse Assistant (demo)"] },
  { slug: "cafeteria", name: "Baith Al Hana Cafeteria", roles: ["Barista (demo)", "Kitchen Helper (demo)"] },
];

// Demo founders. Replace names and roles with real ones.
export const founders = [
  { name: "Abdul Muhaimin Alungal", role: "Chairman" },
  { name: "Abdul variz alungal", role: "CEO" },
  { name: "Hamad Abdul Razaq Abdul Samad Adam", role: "Saudi Director" },
  { name: "Muhammed Shameem Abdulbary chakklakunnan", role: "GM" },
];