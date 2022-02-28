import styled from "styled-components";

export const OtherSkillsWrapper = styled.div`
 padding: 1.25rem 0 0;
`;
export const OtherSkillsList = styled.ul`
& > li{
    color: #77777a;
    margin-bottom: 0.3125rem;
    
}
& > li::before{
    content: '✓';
    color: #ffc107;
    margin-right: 0.625rem;
}
`;

