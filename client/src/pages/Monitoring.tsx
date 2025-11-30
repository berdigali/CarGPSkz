export default function Monitoring() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://gps.cargps.kz/track-desk-monitoring/ru/monitoring"
        className="w-full h-full border-0"
        title="GPS Monitoring Dashboard"
        allow="fullscreen; geolocation"
        data-testid="iframe-monitoring"
      />
    </div>
  );
}
