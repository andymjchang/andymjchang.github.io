import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

type LinkSectionProps = {
    githubLink: string;
    linkedinLink: string;
    email: string;
}

function LinkSection({ githubLink, linkedinLink, email }: LinkSectionProps) {
    return (
        <div className="flex flex-row gap-x-1 justify-center p-4">
            <Link href={githubLink}
                  target="_blank" color="inherit">
                <GitHubIcon sx={{ fontSize: 32 }}/>
            </Link>
            <Link href={linkedinLink}
                  target="_blank" color="inherit">
                <LinkedInIcon sx={{ fontSize: 32 }}/>
            </Link>
            <Link href={"mailto:" + email}
                  target="_blank" color="inherit">
                <EmailRoundedIcon sx={{ fontSize: 32 }}/>
            </Link>
        </div>
    )
}

export default LinkSection