import React from 'react';
import { Card, CardProps } from 'antd';
import { ArtContent } from '../ArtContent';
import { AuctionView, useArt, useCreators } from '../../hooks';
import { MetaAvatar } from '../MetaAvatar';
import { AuctionCountdown } from '../AuctionNumbers';

export interface AuctionCard extends CardProps {
  auctionView: AuctionView;
}

export const AuctionRenderCard = (props: AuctionCard) => {
  const { auctionView } = props;
  const id = auctionView.thumbnail.metadata.pubkey;
  const art = useArt(id);
  const creators = useCreators(auctionView);
  const name = art?.title || ' ';

  const card = (
    <Card hoverable={true} className={`auction-render-card`} bordered={false}>
      <div className={'card-art-info'}>
        <div className="auction-duck">
          <div className={'card-artist-info'}>
            <MetaAvatar
              creators={creators.length ? [creators[0]] : undefined}
            />
            <span className={'artist-name'}>
              {creators[0]?.name ||
                creators[0]?.address?.substr(0, 6) ||
                'Go to auction'}
              ...
            </span>
          </div>
          <div className={'art-content-wrapper'}>
            <ArtContent
              className="auction-image no-events"
              preview={false}
              pubkey={id}
              allowMeshRender={false}
            />
          </div>
          <div className={'art-name'}>{name}</div>
          {!auctionView.isInstantSale && (
            <div className="auction-info-container">
              <div className={'info-message'}>ENDING IN</div>
              <AuctionCountdown auctionView={auctionView} labels={false} />
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return card;
};
