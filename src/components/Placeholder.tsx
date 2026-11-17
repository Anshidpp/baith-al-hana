// Replace with <Image> from next/image once real photos are placed in /public/images.
export default function Placeholder({ label }: { label: string }) {
  return <div className="ph" role="img" aria-label={`Photo placeholder: ${label}`}>{label}</div>;
}
