import { SvgProps } from './types';

export const NoImageIcon = (props: SvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.458333 33.072918"
        className={props.className}
        aria-labelledby="noimage-title"
        width={props.width}
        height={props.height}
        onClick={() => typeof props.onClick === 'function' && props.onClick()}>
        <title id="noimage-title">{props.iconTitle ?? 'Image Not Available'}</title>
        <path d="M18.537396 20.094758v-4.325607l-1.038582-1.138315.727008-.796823.311574.341495v-.68299l1.038584-1.138319v8.309716c0 .341496-.207717.569158-.519292.569158h-7.581652l1.03858-1.138315zm2.077165 5.691584H7.3207034L6.2821199 26.92466H21.133853c.311575 0 .519292-.227665.519292-.569161V10.077566l-1.038584 1.138318zm5.037128-21.7987709L1.7642855 30.168864a.51929131.56915855 0 11-.7270077-.796824l2.9599604-3.244202V4.7274764c0-.3414951.2077165-.5691579.5192913-.5691579H21.133853c.311575 0 .519292.2276628.519292.5691579v2.0489707l3.271535-3.5856989a.51929131.56915855 0 11.727009.7968229zM5.0358208 24.989521l3.4273229-3.756448H6.593695a.51929131.56915855 0 01-.5192916-.569158V7.0041099c0-.3414952.2077165-.5691579.5192916-.5691579h12.462993c.311575 0 .519292.2276627.519292.5691579v2.0489706l1.038581-1.1383155V5.2966342H5.0358208zM16.719877 12.126537l1.817519-1.992056V7.5732699H7.1129875v7.6836391l1.7136614-1.821306a.51929131.56915855 0 01.7270065 0l1.7136626 1.878223 3.790827-4.154859a.51929131.56915855 0 01.727007 0l.934725 1.024486zm-1.298228.170737l-3.790826 4.154857a.51929131.56915855 0 01-.727009 0l-1.7136619-1.821295-2.0771646 2.276632v3.18729h2.3887394l6.4392111-7.114484-.571218-.569157z" />
    </svg>
)
