interface BaseRequestProps {
    request: Request;
}

interface RequestWithParams extends BaseRequestProps {
    params: Promise<{ id: string }>
}