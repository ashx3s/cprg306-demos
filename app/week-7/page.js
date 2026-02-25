import { Icon } from "@iconify/react";
import { ClipboardIcon } from "@heroicons/react/20/solid";
export default function Page() {
  return (
    <main>
      <header>
        <h1>Week 7 Demos</h1>
      </header>
      <section>
        <header>
          <h2>Icon Library Demos</h2>
        </header>
        <div className="flex gap-4">
          <Icon
            icon="fa6-brands:galactic-republic"
            className="text-5xl text-blue-500"
          />
          <ClipboardIcon className="size-12 text-yellow-500" />
        </div>
      </section>
    </main>
  );
}
