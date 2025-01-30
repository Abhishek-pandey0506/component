export const furnishingStatusData = [
    {
      label: "Fully Furnished",
      value: "fully-furnished",
    },
    {
      label: "Semi Furnished",
      value: "semi-furnished",
    },
    {
      label: "Unfurnished",
      value: "unfurnished",
    },
  ]

  export const propertyStatusData =[
    {
      label: "Ready To Move In",
      value: "ready_to_move_in",
    },
    {
      label: "Under Construction",
      value: "under_construction",
    },
  ]

  export const faceingData =[
    {
      label: "North",
      value: "north",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 50,70 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "South",
      value: "south",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,90 90,10 50,30 10,10" fill="black" />
        </svg>
      ),
    },
    {
      label: "East",
      value: "east",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="90,50 10,10 30,50 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "West",
      value: "west",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="10,50 90,10 70,50 90,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "Northeast",
      value: "northeast",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon
            points="90,10 50,50 90,90 50,70 10,90 50,50"
            fill="black"
          />
        </svg>
      ),
    },
    {
      label: "Northwest",
      value: "northwest",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon
            points="10,10 50,50 10,90 50,70 90,90 50,50"
            fill="black"
          />
        </svg>
      ),
    },
    {
      label: "Southeast",
      value: "southeast",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon
            points="90,90 50,50 90,10 50,30 10,10 50,50"
            fill="black"
          />
        </svg>
      ),
    },
    {
      label: "Southwest",
      value: "southwest",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon
            points="10,90 50,50 10,10 50,30 90,10 50,50"
            fill="black"
          />
        </svg>
      ),
    },
  ]
  export const openSideData =[
    {
      label: "Front",
      value: "front",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 50,70 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "Back",
      value: "back",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,90 90,10 50,30 10,10" fill="black" />
        </svg>
      ),
    },
    {
      label: "Left",
      value: "left",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="90,50 10,10 30,50 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "Right",
      value: "right",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="10,50 90,10 70,50 90,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "None",
      value: "none",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
        >
          <rect x="2" y="2" width="20" height="20" fill="black" />1
        </svg>
      ),
    },
  ]

  export const cornerPositionData=  [
    {
      label: "Front-Left",
      value: "front-left",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 50,70 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "Front-Right",
      value: "front-right",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,90 90,10 50,30 10,10" fill="black" />
        </svg>
      ),
    },
    {
      label: "Back-Left",
      value: "back-left",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="90,50 10,10 30,50 10,90" fill="black" />
        </svg>
      ),
    },
    {
      label: "Back-Right",
      value: "back-right",
      img: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="10,50 90,10 70,50 90,90" fill="black" />
        </svg>
      ),
    },
    {
        label: "Not Sure Yet",
        value: "not-sure-yet",
        img: (
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <polygon points="10,50 90,10 70,50 90,90" fill="black" />
          </svg>
        ),
      }
  ]

  export const approvalAuthorityData = [
    {
      label: "RERA",
      value: "RERA",
      tooltip: "Real Estate Regulatory Authority",
    },
    {
      label: "LDA",
      value: "LDA",
      tooltip: "Lucknow Development Authority",
    },
    {
      label: "Nagar Nigam",
      value: "Nagar Nigam",
      tooltip: "Local Municipal Body",
    },
    {
      label: "DDA",
      value: "DDA",
      tooltip: "Delhi Development Authority",
    },
    {
      label: "HUDA",
      value: "HUDA",
      tooltip: "Haryana Urban Development Authority",
    },
    {
      label: "Noida Authority",
      value: "Noida Authority",
      tooltip: "Noida Development Authority",
    },
    {
      label: "GMADA",
      value: "GMADA",
      tooltip: "Greater Mohali Area Development Authority",
    },
    {
      label: "TCPD",
      value: "TCPD",
      tooltip: "Town and Country Planning Department",
    },
    {
      label: "DTCP",
      value: "DTCP",
      tooltip: "Department of Town and Country Planning",
    },
    {
      label: "MHADA",
      value: "MHADA",
      tooltip: "Maharashtra Housing and Area Development Authority",
    },
    {
      label: "AWHO",
      value: "AWHO",
      tooltip: "Army Welfare Housing Organization",
    },
    {
      label: "SEIAA",
      value: "SEIAA",
      tooltip: "State Environmental Impact Assessment Authority",
    },
    { label: "DJB", value: "DJB", tooltip: "Delhi Jal Board" },
    {
      label: "BWSSB",
      value: "BWSSB",
      tooltip: "Bangalore Water Supply and Sewerage Board",
    },
    {
      label: "MSEB",
      value: "MSEB",
      tooltip: "Maharashtra State Electricity Board",
    },
    {
      label: "KSEB",
      value: "KSEB",
      tooltip: "Kerala State Electricity Board",
    },
    {
      label: "Fire Safety Department",
      value: "Fire Safety Department",
      tooltip: "Fire Department Safety Clearance",
    },
    {
      label: "AAI",
      value: "AAI",
      tooltip: "Airports Authority of India",
    },
    {
      label: "MoEFCC",
      value: "MoEFCC",
      tooltip: "Ministry of Environment, Forest and Climate Change",
    },
    {
      label: "Other",
      value: "Other",
      tooltip: "Any other applicable authority",
    },
  ]

  export const ownershipTypeData =[
    { label: "Freehold", value: "freehold" },
    { label: "Leasehold", value: "leasehold" },
    { label: "Cooperative Society", value: "cooperative society" },
    { label: "Commonhold", value: "commonhold" },
    { label: "Timeshare", value: "timeshare" },
    { label: "Condominium", value: "condominium" },
    { label: "Joint Ownership", value: "joint ownership" },
    { label: "Land Trust", value: "land trust" },
    { label: "Other", value: "other" },
  ]

  export const waterAvailabilitys = [
    { value: "Available", label: "Available" },
    { value: "Available 24/7", label: "Available 24/7" },
    { value: "Available During Daytime", label: "Available During Daytime" },
    { value: "Limited Availability", label: "Limited Availability" },
    { value: "Borewell Water", label: "Borewell Water" },
    { value: "Municipal Supply", label: "Municipal Supply" },
    { value: "Water Tanker Supply", label: "Water Tanker Supply" },
    { value: "Rainwater Harvesting", label: "Rainwater Harvesting" },
    { value: "Other", label: "Other" },
    { value: "Not Available", label: "Not Available" },
    { value: "Not Sure", label: "Not Sure" },
  ];
  export const electricityAvailabilitys = [
    { value: "Available", label: "Available" },
    { value: "24/7 Power Backup", label: "24/7 Power Backup" },
    { value: "Limited Hours", label: "Limited Hours" },
    { value: "Solar Power", label: "Solar Power" },
    { value: "Wind Energy", label: "Wind Energy" },
    { value: "Battery Backup", label: "Battery Backup" },
    { value: "Generator Backup", label: "Generator Backup" },
    { value: "Other", label: "Other" },
    { value: "Not Available", label: "Not Available" },
    { value: "Not Sure", label: "Not Sure" },
  ];