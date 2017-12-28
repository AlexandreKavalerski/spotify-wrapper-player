import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';


describe('AlbumTracks', () => {

  const data = [{
    preview_url: 'https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4',
    track_number: 2,
    name: 'O Côro Vai Comê',
    duration_ms: 141133,
  }];

  const data2 = [{
    preview_url: 'https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4',
    track_number: 2,
    name: 'O Côro Vai Comê',
    duration_ms: 141133,
  },
  {
    preview_url: 'https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4',
    track_number: 2,
    name: 'O Côro Vai Comê',
    duration_ms: 141133,
  }];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">2</p>
      <p class="music-title">O Côro Vai Comê</p>
      <p class="music-duration">${convertToHumanTime(141133)}</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">2</p>
      <p class="music-title">O Côro Vai Comê</p>
      <p class="music-duration">${convertToHumanTime(141133)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/7dd1beef360735002712646fadc8b84174b66692?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">2</p>
      <p class="music-title">O Côro Vai Comê</p>
      <p class="music-duration">${convertToHumanTime(141133)}</p>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });
  it('should create and append the markup when more than 1 item', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
});