
import { Game } from '../types';

/**
 * To add a new game, copy the object below and change the details.
 * Use TWO tags: the first for Category (e.g., Adventure) and the second for Platform (e.g., Windows).
 */

export const GAMES: Game[] = [
  {
    id: 'game-1',
    title: 'Leafing around',
    description: "A 2d endless runner where your a leaf trying it's best to avoid the bombs that are in your way.",
    releaseDate: '2025-12-29',
    imageUrl: 'leafingaround.png',
    downloadUrl: '#',
    tags: ['Endless Runner', 'Windows'],
    previews: [
      'la1.png',
      'la2.png',
      'la3.png',
    ]
  },
];
