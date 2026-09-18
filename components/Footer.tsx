import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/[.06] bg-neutral-50 dark:border-white/[.08] dark:bg-neutral-950">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-orange-600">
              Food<span className="text-neutral-900 dark:text-neutral-50">ly</span>
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Food, delivered fast.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Company</p>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">For restaurants</p>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <li>Partner with us</li>
              <li>Apps for you</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Support</p>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <li>Help &amp; support</li>
              <li>Terms &amp; conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-black/[.06] pt-6 text-xs text-neutral-400 dark:border-white/[.08]">
          © {new Date().getFullYear()} Foodly. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
