"use client";
import { Icon } from "@iconify/react";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
export default function Page() {
  return (
    <main className="mx-8">
      <header>
        <h1 className="text-3xl">Week 7 Demo</h1>
        <p>Icons and state and logic</p>
      </header>
      <section>
        <h2>Icons</h2>
        <div>
          <h3>Iconify Icons</h3>
          <div className="flex gap-4">
            <Icon icon="fa6-brands:fedora" className="text-8xl text-blue-500" />
            <Icon icon="fa7-solid:angry" className="text-8xl text-red-500" />
          </div>
        </div>
        <div>
          <h3>Heroicons</h3>
          <div>
            <Bars3CenterLeftIcon className="size-8 text-amber-500 fill-pink-500" />
          </div>
        </div>
      </section>
    </main>
  );
}
