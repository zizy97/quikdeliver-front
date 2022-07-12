/*eslint-disable*/
import { GridToolbar,GridToolbarContainer,GridToolbarExport,GridToolbarDensitySelector,GridToolbarFilterButton,GridToolbarColumnsButton } from '@mui/x-data-grid';

export default function CustomizeGridToolbar({printOptions}) {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport printOptions={printOptions}/>
    </GridToolbarContainer>
  );
}
