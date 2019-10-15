export class TimelineItem {
    public workplace: {
        title: string;
        image: string;
        location: {
            href: string;
            title: string;
        };
    };

    public meta: {
        title: string;
        time: string;
        description: string;
        tasks: string[];
        technologies: string[];
    };
}
