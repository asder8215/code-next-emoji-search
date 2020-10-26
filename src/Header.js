import { getSrc } from './util/getSrc';

const EMOJI1_SRC = getSrc('😈');
const EMOJI2_SRC = getSrc('👿');

export const Header = () => {
  <header>
    <h1>
      <img src={EMOJI1_SRC} width={32} height={32} />
      Emoji Search
      <img src={EMOJI1_SRC} width={32} height={32} />
    </h1>
  </header>
};