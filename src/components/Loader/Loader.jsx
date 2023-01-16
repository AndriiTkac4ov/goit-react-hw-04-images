import { Dna } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export function Loader() {
    return (
        <LoaderWrapper>
            <Dna
            visible={true}
            height="120"
            width="120"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
        </LoaderWrapper>
    )
}