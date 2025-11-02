interface Props {
  title: string;
  folder: string;
  count: number;
}

export class Work {
  readonly title: string;
  readonly folder: string;
  readonly count: number;

  constructor({ folder, title, count }: Props) {
    this.folder = `/works/${folder}`;
    this.title = title;
    this.count = count;
  }

  get cover() {
    return this.images[0];
  }

  get images(): string[] {
    const result: string[] = [];

    for (const img of Array.from({ length: this.count }, (_, i) => i + 1)) {
      result.push(`${this.folder}/${img}.jpg`);
    }

    return result;
  }
}

export const WORKS: Work[] = [
  new Work({ title: "Champ", count: 4, folder: "champ" }),
  new Work({ title: "Cuadro", folder: "cuadro", count: 1 }),
  new Work({ title: "Eden", folder: "eden", count: 4 }),
  new Work({ title: "Fire", folder: "fire", count: 9 }),
  new Work({ title: "Hear", folder: "heart", count: 8 }),
  new Work({ title: "Helmet", folder: "helmet", count: 9 }),
  new Work({ title: "Mask", folder: "mask", count: 1 }),
  new Work({ title: "Meaning", folder: "meaning", count: 2 }),
  new Work({ title: "Photoshop", folder: "photoshop", count: 1 }),
  new Work({ title: "Pill", folder: "pill", count: 2 }),
  new Work({ title: "Stickers", folder: "stickers", count: 2 }),
  new Work({ title: "Tree", folder: "tree", count: 5 }),
  new Work({ title: "Uno", folder: "uno", count: 6 }),
  new Work({ title: "Vacant", folder: "vacant", count: 2 }),
];
