import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="inline-block btn-elegant px-8 py-4 rounded-xl font-semibold text-white text-lg focus-ring"
    >
      <span className="flex items-center">
        <span className="mr-2">💬</span>
        Kontakt aufnehmen
      </span>
    </Link>
  );
} 